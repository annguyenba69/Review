import React, { useState } from 'react';
import PropTypes from 'prop-types';

ReviewItem.propTypes = {
    data: PropTypes.array
};

ReviewItem.defaultProps = {
    data: []
}

function ReviewItem(props) {
    const [index, setIndex] = useState(0);
    const { data } = props;
    function checkNextNumber(index) {
        if (index >= (data.length - 1)) {
            return 0;
        } else {
            return index + 1;
        }
    };
    function checkPrevNumber(index) {
        if (index <= 0) {
            return data.length-1;
        } else {
            return index - 1;
        }
    };
    function nextPerson() {
        setIndex((index) => {
            return checkNextNumber(index)
        });
    };
    function prevPerson() {
        setIndex((index) => {
            return checkPrevNumber(index)
        });
    };
    function randomMe(){
        let randomIndex = Math.trunc(Math.random()*data.length);
        if(randomIndex == index){
            randomIndex = randomIndex +1;
        }
        setIndex(checkNextNumber(randomIndex));
    }
    return (
        <div className="col-12 text-center">
            <div className="review-item">
                <div className="review-item-image mb-3">
                    <div className="img-background" />
                    <img className src={data[index].image} alt="" />
                </div>
                <div className="review-item-info">
                    <h5 className="title">{data[index].name}</h5>
                    <p className="job">{data[index].job}</p>
                    <p className="description">{data[index].text}</p>
                    <div className="icon mb-3">
                        <button onClick={prevPerson} className="button button-icon"><i className="fas fa-chevron-left" /></button>
                        <button onClick={nextPerson} className="button button-icon"><i className="fas fa-chevron-right" /></button>
                    </div>
                    <button onClick={randomMe} className="button button-surprise">Random Me</button>
                </div>
            </div>
        </div>
    );
}

export default ReviewItem;