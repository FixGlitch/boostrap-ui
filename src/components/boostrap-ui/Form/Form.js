import React from "react";
import { Form as BootstrapForm, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Form.module.css";

const CustomForm = ({ initialValues, validationSchema, onSubmit, fields }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          {fields.map((field, index) => (
            <div className={styles.formGroup} key={index}>
              <BootstrapForm.Label htmlFor={field.name}>
                {field.label}
              </BootstrapForm.Label>
              <Field
                name={field.name}
                type={field.type || "text"}
                placeholder={field.placeholder || ""}
                as={BootstrapForm.Control}
                className={styles.field}
              />
              <ErrorMessage
                name={field.name}
                component="div"
                className={styles.error}
              />
            </div>
          ))}
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
