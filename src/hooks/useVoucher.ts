import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Voucher {
    code: string;
    discount: number;
    quantity: number;
    status: boolean;
    id: number;
}

const useVoucher = () => {
    const [voucher, setVoucher] = useState<Voucher[]>();

    useQuery({
        queryKey: ['voucher'],
        queryFn: async () => {
            try {
                const response = await axios.get('https://63e1a4494324b12d963c3aa4.mockapi.io/voucher');
                setVoucher(response.data);
                return response.data;
            } catch (error) {
                throw new Error('Failed to fetch voucher data');
            }
        }
    });

    return voucher;
};

export default useVoucher;
