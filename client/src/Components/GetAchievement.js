import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import '../assets/css/style.css';

function GetAchievement(props) {
    return (
        <>
            <StarIcon className="star" />
            <h4>{props.achievementInfo.achievement}</h4>
        </>
    )
}

export default GetAchievement;