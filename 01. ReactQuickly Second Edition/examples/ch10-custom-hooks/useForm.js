import { useState } from "react";

function useForm(initialValues) {
  const [data, setData] = useState(initialValues);
  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData((oldData) => ({ ...oldData, [key]: value }));
  };
  return [data, onChange];
}

/* const [data, onChange] = useForm({
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
});
*/

export default useForm;
