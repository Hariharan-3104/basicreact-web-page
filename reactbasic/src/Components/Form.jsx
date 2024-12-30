import React, { useState } from 'react';
import './App.css'; // Ensure you import the CSS file

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    address: '',
    phone: '',
    dob: '',
    memories: '',
    gender: '',
    favoriteActor: [],
    school: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        favoriteActor: checked
          ? [...prevData.favoriteActor, value]
          : prevData.favoriteActor.filter((actor) => actor !== value)
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nickname">Nickname:</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="memories">Memories:</label>
            <textarea
              id="memories"
              name="memories"
              value={formData.memories}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  required
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Favorite Actor:</label>
            <div className="checkbox-group-vertical">
              <label>
                <input
                  type="checkbox"
                  name="favoriteActor"
                  value="Vijay"
                  checked={formData.favoriteActor.includes('Vijay')}
                  onChange={handleChange}
                />
                Vijay
              </label>
              <label>
                <input
                  type="checkbox"
                  name="favoriteActor"
                  value="Ajith"
                  checked={formData.favoriteActor.includes('Ajith')}
                  onChange={handleChange}
                />
                Ajith
              </label>
              <label>
                <input
                  type="checkbox"
                  name="favoriteActor"
                  value="Suriya"
                  checked={formData.favoriteActor.includes('Suriya')}
                  onChange={handleChange}
                />
                Suriya
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="school">School:</label>
            <select
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            >
              <option value="">Select a school</option>
              <option value="Goodwill school">School 1</option>
              <option value="Joseph School">School 2</option>
              <option value="SSM School">School 3</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
