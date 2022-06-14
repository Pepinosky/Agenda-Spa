import { useEffect, useState } from "react";
import axios from 'axios';

const useGetReservations = (API) => {
	const [reservations, setReservations] = useState([]);

	useEffect( () => {
		const response = await axios(API);
		setReservations(response.data);
	}, [API]);

	return reservations;
};

export default useGetReservations;
