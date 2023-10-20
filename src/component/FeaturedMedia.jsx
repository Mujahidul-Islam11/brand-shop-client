/* eslint-disable react/prop-types */
import FeaturedCards from "./FeaturedCards";

const FeaturedMedia = ({movies}) => {
    return (
        <div className="grid md:grid-cols-4 gap-4 container mx-auto">
            {
                movies.map(movie=> <FeaturedCards key={movie.id} movie={movie}></FeaturedCards>)
            }
        </div>
    );
};

export default FeaturedMedia;