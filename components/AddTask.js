"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo } from "../app/api";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");

  const handleSubmitNewTodo = async (e) => {
    e.preventDefault();
    await addTodo({
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Yeni Görev Ekle <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Yeni Görev Ekle</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn">
              Kaydet
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;




//////aşağıda ki kod class component ama çözemediğim bir sebepten aşırı render yapıyor 
/* import React, { Component } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { addTodo } from "../app/api";
import { withRouter } from "next/router";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      newTaskValue: "",
    };
  }

  handleOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleSubmitNewTodo = async (e) => {
    e.preventDefault();
    await addTodo({
      text: this.state.newTaskValue,
    });
    this.setState({ newTaskValue: "", modalOpen: false });
    this.props.router.push(this.props.router.pathname); // Yenileme yerine sayfayı yeniden yönlendiriyoruz
  };

  handleInputChange = (e) => {
    this.setState({ newTaskValue: e.target.value });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleOpenModal}
          className="btn btn-primary w-full"
        >
          Yeni Görev Ekle <AiOutlinePlus className="ml-2" size={18} />
        </button>

        <Modal
          modalOpen={this.state.modalOpen}
          setModalOpen={this.handleCloseModal}
        >
          <form onSubmit={this.handleSubmitNewTodo}>
            <h3 className="font-bold text-lg">Yeni Görev Ekle</h3>
            <div className="modal-action">
              <input
                value={this.state.newTaskValue}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Kaydet
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(AddTask); */
