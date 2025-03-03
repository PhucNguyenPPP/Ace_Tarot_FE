const baseUrl = import.meta.env.VITE_API_HOST;

export const CreatePaymentUrl = async (bookingId) => {
    try {
        const url = `${baseUrl}/api/Payment/vnpay-payment?bookingId=${bookingId}`;
        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        const response = await fetch(url, request);
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const CreatePaymentPayOsUrl = async (bookingNumberPayOs) => {
    try {
        const url = `${baseUrl}/api/Payment/payos-payment?bookingNumberPayOs=${bookingNumberPayOs}`;
        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        const response = await fetch(url, request);
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const HandlePaymentResponse = async (data) => {
    try {
        const url = `${baseUrl}/api/Payment/response-payment`;
        const request = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, request);
        return response;
    } catch (err) {
        console.log(err);
    }
};