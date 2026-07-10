import "./SectionTitle.css";

export default function SectionTitle({ title }) {

    return (

        <div className="section-title container">

            <h2 className="section-title__text">

                {title}

            </h2>

        </div>

    );
}
