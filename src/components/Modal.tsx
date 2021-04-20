import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ModalPortal from './ModalPortal';
import Button from './Button';

import { FormProvider, useForm } from 'react-hook-form';
import { InputName } from '../types/enums';
import React from 'react';

interface Props {
  setMessage?: Function;
  message?: string;
}
const Modal: React.FC<Props> = ({ setMessage, message }) => {
  const [showModal, setShowModal] = useState(false);
  const methods = useForm({
    defaultValues: {
      notes: message ? message : '',
    },
  });
  const { handleSubmit, register }: any = methods;

  const onSubmit = (data: any) => {
    setMessage && setMessage(data.notes);
    setShowModal(false);
  };

  return (
    <FormProvider {...methods}>
      <AnimatePresence>
        {showModal && (
          <ModalPortal>
            <div className='modal'>
              <div className='modal__overlay' />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='modal__box'
              >
                <div className='modal__notes'>
                  <label className='modal__input' htmlFor='Notes'>
                    Notes
                  </label>
                  <textarea
                    placeholder='Notes'
                    rows={20}
                    cols={80}
                    name={InputName.IceCream}
                    ref={register}
                  />
                </div>
                <div className='button-style'>
                  <Button
                    classes='btn btn--primary'
                    label='Submit'
                    clickHandler={handleSubmit(onSubmit)}
                  />
                  <Button
                    classes='btn btn--outline'
                    label='Cancel'
                    clickHandler={() => setShowModal(false)}
                  />
                </div>
              </motion.div>
            </div>
          </ModalPortal>
        )}
      </AnimatePresence>
      <button className='btn--modal' onClick={() => setShowModal(true)}>
        <FiEdit className='modal__icon' />
      </button>
      {/* <FiEdit className="modal__icon" /> */}
    </FormProvider>
  );
};

export default Modal;
