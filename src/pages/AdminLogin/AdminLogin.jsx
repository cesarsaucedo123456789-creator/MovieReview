import "./AdminLogin.css";

export default function AdminLogin(){

    return(

        <section className="admin-login">

            <div className="admin-login__card">

                <h1 className="admin-login__title">

                    MovieReview Admin

                </h1>

                <p className="admin-login__subtitle">

                    Inicia sesión para administrar la plataforma

                </p>

                <form className="admin-login__form">

                    <input

                        type="email"

                        placeholder="Correo"

                        className="admin-login__input"

                    />

                    <input

                        type="password"

                        placeholder="Contraseña"

                        className="admin-login__input"

                    />

                    <button

                        className="button button--primary admin-login__button"

                    >

                        Iniciar sesión

                    </button>

                </form>

            </div>

        </section>

    )
}
