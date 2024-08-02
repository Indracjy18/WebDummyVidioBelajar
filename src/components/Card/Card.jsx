import React, { useState } from "react";

const Card = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/344x193.png",
      title: "Course Title 1",
      description: "This is the first course description.",
      instructorImg: "https://via.placeholder.com/40.png",
      instructorName: "Instructor 1",
      instructorRole: "Role 1",
      price: "$100",
    },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    imgSrc: "",
    title: "",
    description: "",
    instructorImg: "",
    instructorName: "",
    instructorRole: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = () => {
    setCards([...cards, { ...formData, id: cards.length + 1 }]);
    setFormData({
      id: "",
      imgSrc: "",
      title: "",
      description: "",
      instructorImg: "",
      instructorName: "",
      instructorRole: "",
      price: "",
    });
  };

  const handleUpdate = () => {
    const updatedCards = cards.map((card) =>
      card.id === parseInt(formData.id) ? formData : card
    );
    setCards(updatedCards);
    setFormData({
      id: "",
      imgSrc: "",
      title: "",
      description: "",
      instructorImg: "",
      instructorName: "",
      instructorRole: "",
      price: "",
    });
  };

  const handleDelete = (id) => {
    const filteredCards = cards.filter((card) => card.id !== id);
    setCards(filteredCards);
  };

  const handleEdit = (card) => {
    setFormData(card);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4">Create/Update Card</h2>
        <form className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <label className="block mb-1">Image URL:</label>
            <input
              type="text"
              name="imgSrc"
              value={formData.imgSrc}
              onChange={handleInputChange}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Instructor Image URL:</label>
            <input
              type="text"
              name="instructorImg"
              value={formData.instructorImg}
              onChange={handleInputChange}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Instructor Name:</label>
            <input
              type="text"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleInputChange}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Instructor Role:</label>
            <input
              type="text"
              name="instructorRole"
              value={formData.instructorRole}
              onChange={handleInputChange}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Price:</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1">ID (for update):</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleCreate}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Create
            </button>
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white w-full h-[426px] border rounded-lg max-w-screen-lg"
          >
            <div className="mx-5 mt-5">
              <img
                src={card.imgSrc}
                className="w-full h-[193px] object-cover rounded"
                alt="Video Thumbnail"
              />
              <h2 className="mt-4 font-bold text-lg">{card.title}</h2>
              <p className="mt-2 text-gray-600">{card.description}</p>
              <div className="mt-5 flex items-center">
                <img
                  src={card.instructorImg}
                  className="w-10 h-10 rounded-full"
                  alt="Instructor"
                />
                <div className="ml-3">
                  <h3 className="font-semibold text-lg">
                    {card.instructorName}
                  </h3>
                  <p className="text-gray-500">{card.instructorRole}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mx-5 mb-5">
              <img src="/img/starsssss.png" className="w-[90px]" alt="Rating" />
              <p className="font-semibold text-2xl text-primary-500">
                {card.price}
              </p>
            </div>
            <div className="flex justify-between mx-5 mb-5">
              <button
                onClick={() => handleEdit(card)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(card.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
