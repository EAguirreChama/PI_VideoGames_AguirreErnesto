import { useState, useEffect } from "react";
import style from "./FormularioComp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postVideoGame } from "../../redux/ActionsGames/postVideoGame";
import { getPlatforms } from "../../redux/ActionsPlatforms/getPlatforms";
import { getGenres } from "../../redux/ActionsGenres/getGenres";

const FormularioComp = () => {
  const genres = useSelector((state) => state.allGenres);
  const platforms = useSelector((state) => state.allPlatforms);
  const dispatch = useDispatch();

  const expRegUrl = /^https?:\/\/(www\.)?[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)?$/i;

  const [form, setForm] = useState({
    name: "",
    description: "",
    platforms: [],
    background_image: "",
    released: "",
    rating: "",
    genres: [],
  });

  useEffect(() => {
    dispatch(getPlatforms());
    dispatch(getGenres());
  }, [dispatch]);

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    platforms: [],
    background_image: "",
    released: "",
    rating: "",
    genres: [],
  });

  const handleGenres = (event) => {
    event?.preventDefault()
    setForm({
      ...form,
      genres: [...form.genres, event.target.value],
    });
  };

  const handlePlatforms = (event) => {
    event?.preventDefault()
    setForm({
      ...form,
      platforms: [...form.platforms, event.target.value 
      ],
    })
  }

  const changeHandler = (event) => {
    event?.preventDefault()
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {
    const newErrors = {};

    if (form.name.trim() === "") newErrors.name = "El nombre es obligatorio";
    if (form.description.trim() === "")
      newErrors.description = "La descripción es obligatoria";
    if (form.platforms.length === 0)
      newErrors.platforms = "Tienes que colocar por lo menos 1 plataforma";
    if (!expRegUrl.test(form.background_image)) 
      newErrors.background_image = "Url invalido";
    if (form.released.trim() === "")
      newErrors.released = "Tienes que colocar una fecha";
    if (form.rating.trim() === "")
      newErrors.rating = "Tienes que colocar un rating";
    const ratingValue = parseFloat(form.rating);
    if (isNaN(ratingValue) || ratingValue < 0 || ratingValue > 5) {
      newErrors.rating = "El rating debe ser un número entre 0 y 5";
    }
    if (form.genres.length === 0)
      newErrors.genres = "Tienes que colocar un género";

    setErrors(newErrors);
  };

  const submitHandler = (event) => {
    event?.preventDefault();
    dispatch(postVideoGame(form));
    setForm({
      name: "",
      description: "",
      platforms: [],
      background_image: "",
      released: "",
      rating: "",
      genres: [],
    });
  };

  const handleRemove = (index, type, event) => {
    event?.preventDefault()
    let updatedArray = [...form[type]];
    updatedArray.splice(index, 1);
    setForm({ ...form, [type]: updatedArray });
  };



  return (
    <form onSubmit={(e) => submitHandler(e)} className={style.form}>
      <div className={style.formGroup}>
        <div className={style.containerMensaje}>
          <label htmlFor="name" className={style.label}>
            Nombre:
          </label>
          {errors.name && <span className={style.error}>{errors.name}</span>}
        </div>
        <input
          type="text"
          onChange={(e) => changeHandler(e)}
          name="name"
          value={form.name}
          className={style.inputField}
          placeholder="Ingrese un nombre"
        />

        <div className={style.containerMensaje}>
          <label htmlFor="descripcion" className={style.label}>
            Descripción:
          </label>
          {errors.description && (
            <span className={style.error}>{errors.description}</span>
          )}
        </div>
        <textarea
          onChange={(e) => changeHandler(e)}
          name="description"
          value={form.description}
          className={style.textareaField}
          placeholder="Describa su juego"
        ></textarea>

        <div className={style.containerMensaje}>
          <label htmlFor="plataforma" className={style.label}>
            Plataforma:
          </label>
          {errors.platforms && (
            <span className={style.error}>{errors.platforms}</span>
          )}
        </div>
        <select onChange={(e) => handlePlatforms(e)} className={style.selectField}>
          {platforms.sort().map((plat) => (
            <option key={plat.id} value={plat.name}>
              {plat.name}
            </option>
          ))}
        </select>
        <ul className={style.List}>
          {form.platforms.map((plat, index) => (
            <li key={index}>
              {plat}
              <button onClick={(event) => handleRemove(index, "platforms", event)}>Eliminar</button>
            </li>
          ))}
        </ul>


        <div className={style.containerMensaje}>
          <label htmlFor="imagen" className={style.label}>
            Imagen:
          </label>
          {errors.background_image && (
            <span className={style.error}>{errors.background_image}</span>
          )}
        </div>
        <input
          type="text"
          onChange={(e) => changeHandler(e)}
          name="background_image"
          value={form.background_image}
          className={style.inputField}
          placeholder="Agregue una imagen"
        />

        <div className={style.containerMensaje}>
          <label htmlFor="released" className={style.label}>
            Fecha de Lanzamiento:
          </label>
          {errors.released && (
            <span className={style.error}>{errors.released}</span>
          )}
        </div>
        <input
          type="date"
          onChange={(e) => changeHandler(e)}
          name="released"
          value={form.released}
          className={style.inputField}
        />

        <div className={style.containerMensaje}>
          <label htmlFor="rating" className={style.label}>
            Rating:
          </label>
          {errors.rating && (
            <span className={style.error}>{errors.rating}</span>
          )}
        </div>
        <input
          type="number"
          onChange={(e) => changeHandler(e)}
          name="rating"
          value={form.rating}
          min="0"
          max="5"
          className={style.inputField}
        />

        <div className={style.containerMensaje}>
          <label htmlFor="genero" className={style.label}>
            Género:
          </label>
          {errors.genres && (
            <span className={style.error}>{errors.genres}</span>
          )}
        </div>
        <select onChange={(e) => handleGenres(e)} className={style.selectField}>
          {genres.sort().map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <ul className={style.List}>
          {form.genres.map((genre, index) => (
            <li key={index}>
              {genre}
              <button onClick={(e) => handleRemove(index, "genres", e)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
      <button type="submit" className={style.submitButton}>
        Crear Juego
      </button>
    </form>
  );
};

export default FormularioComp;