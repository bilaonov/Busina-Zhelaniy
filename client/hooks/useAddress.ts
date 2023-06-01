import { useEffect, useState } from 'react'
import { IAddress } from '../types/addressTypes'
import { supabase } from '../lib/supabase'

const useAddressData = (user_id: string | undefined) => {
    const [addressData, setAddressData] = useState<IAddress | null>()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchAddressData = async () => {
            setIsLoading(true)
            try {
                const { data, error } = await supabase
                    .from('order')
                    .select('*')
                    .eq('user_id', user_id)
                    .limit(1)
                if (error) {
                    throw new Error('Ошибка при получении адреса пользователя')
                }

                setAddressData(data.length === 0 ? null : data[0])
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        if (user_id) {
            fetchAddressData()
        }
    }, [user_id])
    return { addressData, isLoading }
}

export default useAddressData
