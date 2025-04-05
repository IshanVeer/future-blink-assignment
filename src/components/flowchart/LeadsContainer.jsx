import React from "react";
import Modal from "../ui/Modal";
import css from "./LeadsContainer.module.css";

const LeadsContainer = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={css.headingContainer}>
        <h2 className={css.heading}>Add a Source Block</h2>
        <p className={css.description}>
          Pick a block and configure, any new leads that match rules will be
          added to sequence automatically
        </p>
      </div>
      <div>
        <h3>Sources</h3>

        <div className={css.leadsContainer}>
          {/* lead source */}
          <button className={css.buttonContainer}>
            <div className={css.buttonImageContainer}>
              <img className={css.buttonImage} src="/icons/leads-user.svg" />
            </div>

            <div className={css.buttonContent}>
              <h3 className={css.buttonContentHeading}>Leads from List(s)</h3>
              <p className={css.buttonContentdescription}>
                connect multiple lists as source for this sequence
              </p>
            </div>
          </button>
          {/* Segment by events */}
          <button className={css.buttonContainer}>
            <div className={css.buttonImageContainer}>
              <img className={css.buttonImage} src="/icons/leads-user.svg" />
            </div>

            <div className={css.buttonContent}>
              <h3 className={css.buttonContentHeading}>Leads from List(s)</h3>
              <p className={css.buttonContentdescription}>
                connect multiple lists as source for this sequence
              </p>
            </div>
          </button>
          {/* segment by list */}
          <button className={css.buttonContainer}>
            <div className={css.buttonImageContainer}>
              <img className={css.buttonImage} src="/icons/leads-user.svg" />
            </div>

            <div className={css.buttonContent}>
              <h3 className={css.buttonContentHeading}>Leads from List(s)</h3>
              <p className={css.buttonContentdescription}>
                connect multiple lists as source for this sequence
              </p>
            </div>
          </button>
          {/* CRM integration leads */}
          <button className={css.buttonContainer}>
            <div className={css.buttonImageContainer}>
              <img className={css.buttonImage} src="/icons/leads-user.svg" />
            </div>

            <div className={css.buttonContent}>
              <h3 className={css.buttonContentHeading}>Leads from List(s)</h3>
              <p className={css.buttonContentdescription}>
                connect multiple lists as source for this sequence
              </p>
            </div>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LeadsContainer;
