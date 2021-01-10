import React from 'react';
import ProfileForm from './ProfileForm';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const UpdateProfile = (props) => {
  return (
    <Modal isOpen={props.showModal} toggle={props.onToggle}>
      <ModalHeader toggle={props.onToggle} charCode="X">
        {props.heading}
      </ModalHeader>
      <ModalBody>
        <ProfileForm
          profile={props.profile}
          abortButtonLabel="Cancel"
          abortButtonAction={props.onToggle}
          onChange={props.onChange}
          onReload={props.onReload}
        />
      </ModalBody>
    </Modal>
  );
};

export default UpdateProfile;
