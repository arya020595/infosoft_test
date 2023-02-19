import { ref } from "vue";

const getOrders = () => {
    const orders = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://127.0.0.1:8000/api/orders')

            if(!data.ok) {
                throw Error('no data available')
            }

            orders.value = await data.json()
            // console.log(orders.value.data);
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { orders, error, load }
}

export default getOrders