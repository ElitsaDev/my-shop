import { v4 as uuidv4} from 'uuid';

export default function Rating({value, color}){

    return (
    <div className='rating'>
        {[1, 2, 3, 4, 5].map((rate) => (
        <span key={uuidv4()}>
          <i
            style={{ color }}
            className={
              value + 1 === rate + 0.5
                ? "fa fa-star-half-o"
                : value >= rate
                ? "fa fa-star" 
                : "fa fa-star-o"
            }
          ></i>
        </span>
      ))}
    </div>
    );
};

Rating.defaultProps = {
    color: "#f7941d",   
}