import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import s from '../components/app.module.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28740529-a5c8b6a6d9e9b336b906aaf7a';
export class App extends Component {
  state = {
    data: [],
    page: 1,
    query: '',
    loading: false,
    modalOpen: false,
    modalContent: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if ((query && prevState.query !== query) || page > prevState.page) {
      this.getImagesFromApi();
    }
  }

  getImagesFromApi = async () => {
    try {
      this.setState({ loading: true });
      const {
        data: { hits },
      } = await axios.get(`${BASE_URL}`, {
        params: {
          q: this.state.query,
          page: this.state.page,
          key: API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      this.setState({ data: [...this.state.data, ...hits] });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  searchImg = query => {
    this.setState({ query: query });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = originUrl => {
    this.setState({
      modalOpen: true,
      modalContent: originUrl,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: '',
    });
  };

  render() {
    const isPosts = Boolean(this.state.data.length);
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.searchImg} />

        <ImageGallery
          onClick={this.openModal}
          close={this.closeModal}
          data={this.state.data}
        />
        {this.state.modalOpen && (
          <Modal originUrl={this.state.modalContent} close={this.closeModal} />
        )}
        {this.state.loading && <Loader />}
        {isPosts && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}
