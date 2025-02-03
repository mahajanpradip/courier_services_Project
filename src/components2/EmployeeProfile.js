import React, { useState } from 'react';

function EmployeeProfile() {
  // Initial profile data
  const [profile, setProfile] = useState({
    name: 'Rithik Roshan',
    email: 'ritik@123gmail.com',
  });

  // State to manage the editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State for input values when editing
  const [newName, setNewName] = useState(profile.name);
  const [newEmail, setNewEmail] = useState(profile.email);

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save updated profile
  const saveProfile = () => {
    setProfile({
      name: newName,
      email: newEmail,
    });
    setIsEditing(false); // Exit edit mode after saving
  };

  // Render profile in view mode
  const renderProfileView = () => {
    return (
      <div className="profile-text">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <button className="button edit-button" onClick={toggleEdit}>Edit Profile</button>
      </div>
    );
  };

  // Render profile in edit mode
  const renderProfileEdit = () => {
    return (
      <div className="uprofile">
      <div className="uprof">
        <div className="up"> 
          <label className="input-label">Name: </label>
          <input
            className="input-field"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <label className="input-label">Email: </label>
          <input
            className="input-field"
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button className="button save-button" onClick={saveProfile}>Save</button>
        <button className="button cancel-button" onClick={toggleEdit}>Cancel</button>
      </div>
      </div>
    );
  };

  // Display either the profile view or edit form based on the editing mode
  if (isEditing) {
    return renderProfileEdit();
  } else {
    return renderProfileView();
  }
}

export default EmployeeProfile;
