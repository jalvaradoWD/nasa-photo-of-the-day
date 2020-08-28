import React, { useState, useEffect } from "react";
import axios from "axios";

const PhotoToday = () => {
	const [photoOfTheDay, setPhotoOfTheDay] = useState();

	useEffect(() => {
		const today = new Date();

		axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=7m8dwhEqKlZT0y6TESlOhUEZx3AL7Voj63cgr8I0&hd=True&date=${today.getFullYear()}-${
					today.getMonth() + 1
				}-${today.getDate()}`
			)
			.then((res) => {
				setPhotoOfTheDay(res.data);
			});
	}, []);

	const renderTodayPhoto = (photo) => {
		const { title, date, explanation, media_type, url } = photo;

		const renderImgOrVideo =
			media_type === "video" ? (
				<iframe
					title="YouTube-Video-Player"
					width="560"
					height="315"
					src={url}
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				></iframe>
			) : (
				<img src={url} alt="Nasa's Space Snapshot of the day" />
			);

		return (
			<>
				<h2>{title}</h2>
				<p>{explanation}</p>
				<p>{media_type}</p>
				<p>{date}</p>
				{renderImgOrVideo}
			</>
		);
	};

	return (
		<>
			<main>
				<article id="photoOfTheDay">
					{photoOfTheDay === undefined || photoOfTheDay === null
						? null
						: renderTodayPhoto(photoOfTheDay)}
				</article>
			</main>
		</>
	);
};

export default PhotoToday;
