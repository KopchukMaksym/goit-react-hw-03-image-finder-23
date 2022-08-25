import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import s from '../components/app.module.css';
import { fetchApi } from 'utils/FetchApi';

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
      } = await fetchApi(this.state.page, this.state.query);
      this.setState({ data: [...this.state.data, ...hits] });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  searchImg = query => {
    this.setState({ query: query, page: 1, data: [] });
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
