import React from "react";
import { Placeholder } from "react-bootstrap";
import styles from "./Skeleton.module.css";

const Skeleton = ({ rows = 1 }) => {
  return (
    <>
      {[...Array(rows)].map((_, index) => (
        <div key={index} className={styles.skeleton}>
          <Placeholder animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
