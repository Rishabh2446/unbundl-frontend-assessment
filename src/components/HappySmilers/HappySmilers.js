import React, {useEffect, useState} from "react";
import { fetchTestimonials } from "../../services/api";
import "./HappySmilers.css";

function HappySmilers() {

    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        const loadTestimonials = async ()=>{
            try {
                const data = await fetchTestimonials();
                console.log(data);
                setTestimonials(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadTestimonials();
    }, []);

    if (loading) {
        return <h2 className="status-message">Loading testimonials...</h2>;
    }

    if (error) {
        return <h2 className="status-message">{error}</h2>;
    }

    return(
        <section className="happy-smilers">
            <h2 className="section-title">Happy Smilers!</h2>

            <div className="testimonial-container">
                {testimonials.map((user) => (
                    <div
                        key={user.login.uuid}
                        className="testimonial-card"
                    >
                        
                        <img
                        src={user.picture.large}
                        alt={user.name.first}
                        className="testimonial-image"
                        />
                        <div className="quote-mark">❝</div>
                        <h3 className="testimonial-user">
                        {user.name.first} {user.name.last}
                        </h3>

                        <p className="testimonial-footer">
                        Happy-monials by Whistle
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
    
}
export default HappySmilers;