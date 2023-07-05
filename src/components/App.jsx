import { Component } from 'react';
import api from '../Utils/api';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import css from './styles.module.css'


export class App extends Component {
  state = {
    page: 1,
    query: '',
    receivedData: [],
    totalHits: null,
    status: 'static',
    forModal: {},
    error: '',
  };
  /* loading, static, modal, error */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.receivedData !== this.state.receivedData) {
      const height = document.body.clientHeight;
      return height;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { query, page, receivedData } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ status: 'loading' });
      this.dataRequest();
    }
    if (prevState.receivedData !== receivedData && page > 1) {
      window.scrollTo({
        top: snapshot - 250,
        behavior: 'smooth',
      });
    }
  }

  async dataRequest() {
    const { page, query } = this.state;
    try {
      const data = await api(query, page);

      this.setState(prevState => ({
        receivedData: [...prevState.receivedData, ...data.hits],
        status: 'static',
        totalHits: data.totalHits,
      }));
    } catch (error) {
      this.setState({ status: 'error', error });
    }
  }

  onSubmit = async query => {
    if (this.state.query === query && this.state.page === 1) return;
    this.setState({ query, receivedData: [], page: 1, totalHits: null });
  };

  onClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onOpenModal = (src, alt) => {
    this.setState({ status: 'modal', forModal: { src, alt } });
  };

  toggleModale = () => {
    this.setState({ status: 'static' });
  };

  render() {
    const { page, totalHits, status, forModal, receivedData, error } = this.state;
    const totalPage = Math.ceil(totalHits / 12);
    return (
      <>
        <div className={css.app}>
          <Searchbar onSubmit={this.onSubmit} />

          {receivedData.length > 0 && (
            <ImageGallery>
              <ImageGalleryItem data={receivedData} onOpenModal={this.onOpenModal} />
            </ImageGallery>
          )}

          {status === 'loading' && <Loader />}

          {status === 'error' && <p style={{ textAlign: 'center' }}>{error.message}</p>}

          {totalPage > page && <Button onClick={this.onClick} />}
        
        </div>
     
          {status === 'modal' && <Modal forModal={forModal} toggleModale={this.toggleModale} />}
      </>
    );
  }
}

export default App;