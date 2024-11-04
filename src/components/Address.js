import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Address = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    if (cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          const data = response.data;
          console.log(data);
          setValue("address", data.logradouro);
          setValue("neighborhood", data.bairro);
          setValue("city", data.localidade);
          setValue("uf", data.uf);
        })
        .catch((error) => {
          console.error("Error fetching data from API", error);
        });
    }
  };

  return (
    <div className="cepContainer">
      <form className="address-register" onSubmit={handleSubmit(onSubmit)}>
        <div className="address-row">
          <label>
            <input
              placeholder="Ex: 99999-999"
              type="text"
              {...register("cep")}
              onBlur={checkCEP}
            />
          </label>
          <label>
            <input
              placeholder="Digite sua rua"
              type="text"
              {...register("address")}
            />
          </label>
          <label>
            <input
              placeholder="Número"
              type="text"
              {...register("addressNumber")}
            />
          </label>
        </div>
        <div className="address-row">
          <label>
            <input
              placeholder="Bairro"
              type="text"
              {...register("neighborhood")}
            />
          </label>
          <label>
            <input placeholder="Cidade" type="text" {...register("city")} />
          </label>
          <label>
            <input placeholder="Estado" type="text" {...register("uf")} />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Address;
