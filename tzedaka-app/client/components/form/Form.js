import React from "react";
import countries from "./Countries";
import programs from "./Programs";
import FreeTextField from "./FreeTextField";
import DropdownField from "./DropdownField";
import CommentField from "./CommentField";

const FormComponent = () => {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    // const data = await response.json();
    // ...
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Información de contacto
          </h2>
          {/* The following div manages all fields */}
          <div>
            {/* <div className="flex items-center justify-center"> */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              <FreeTextField type="text" id="name" label="Nombre" required />
              <FreeTextField
                type="text"
                id="surname"
                label="Apellido"
                required
              />
              <FreeTextField type="email" id="email" label="Email" required />
              <FreeTextField
                type="tel"
                id="phone"
                label="Número de teléfono"
                pattern="[0-9]{10,12}"
                required
              />
            </div>

            <DropdownField
              type="text"
              id="country"
              label="País"
              options={countries}
              selected="Argentina"
            />
            <div className="grid grid-cols-2 gap-3">
              <FreeTextField type="text" id="state" label="Provincia" />
              <FreeTextField type="text" id="city" label="Localidad" />

              <FreeTextField type="text" id="address" label="Dirección" />

              <FreeTextField type="text" id="zipcode" label="Código Postal" />
            </div>

            <DropdownField
              type="text"
              id="programs"
              label="Programa de interés"
              options={programs}
              selected="ABC"
            />

            <CommentField 
              id="comment" 
              label="Comentario" 
              height="h-40" 
              maxChars={300} 
            />

          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-800 text-white font-bold rounded py-2 px-4"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
