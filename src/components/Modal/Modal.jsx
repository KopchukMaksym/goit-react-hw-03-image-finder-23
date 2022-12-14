import { Component } from 'react';
import s from '../Modal/modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.closeModal}>
        <div className={s.modal}>
          <img src={this.props.originUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  originUrl: PropTypes.string,
  close: PropTypes.func,
};
