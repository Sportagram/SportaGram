import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchTeams = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/teams'); // 백엔드 API 주소
                setTeams(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    return { teams, loading, error };
};

export default useFetchTeams;
