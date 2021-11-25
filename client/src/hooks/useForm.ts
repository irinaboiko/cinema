import { ChangeEvent, useCallback, useState } from "react";

interface IForm<T> {
  formValues: T;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function useForm<T>(initialValues: T): IForm<T> {
  const [formValues, setFormValues] = useState<T>(initialValues);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = event.target;

      setFormValues((prevState) => ({ ...prevState, [name]: value }));
    },
    []
  );

  return { formValues, handleInputChange };
}

export default useForm;
