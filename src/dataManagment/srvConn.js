import {Alert} from 'react-native';
import {host, token} from '../Constants/network';

export async function makeGetRequest(params) {
  try {
    const response = await fetch(`${host}/${params}`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    if (!response.ok) {
      Alert.alert('Ошибка подключения ', response.status.toString());
      return false;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    Alert.alert('Ошибка', err.message);
    return false;
  }
}
export async function checkClient(mobile) {
  try {
    const response = await fetch(`${host}/checkclient/${mobile}`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    // console.log(`${host}/checkclient/${mobile}`);
    if (!response.ok) {
      Alert.alert('Ошибка подключения ', response.status.toString());
      return false;
    }

    const data = await response.text();
    return data;
  } catch (err) {
    Alert.alert('Ошибка', err.message);
    return false;
  }
}

export async function sendMessage(body) {
  try {
    const response = await fetch(
      `https://l-factura.uz/factura/hs/common/sendsms`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic Ym9uaXRvU01TOkJvbml0bzI2OTY=`,
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(body),
      },
    );
    if (!response.ok) {
      Alert.alert('Ошибка подключения ', response.status.toString());
      return false;
    }

    if (response.status == 200) return true;
  } catch (err) {
    Alert.alert('Ошибка', err.message);
    return false;
  }
}

export async function newClient(body) {
  try {
    const response = await fetch(`${host}/newclient`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      Alert.alert('Ошибка подключения ', response.status.toString());
      return false;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    Alert.alert('Ошибка', err.message);
    return false;
  }
}

// ================

export async function order(body) {
  try {
    // console.log(`${host}/order`);
    // console.log(JSON.stringify(body));
    const response = await fetch(`${host}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      Alert.alert('Ошибка подключения ', response.status.toString());
      return false;
    }

    if (response.status == 200) return true;
  } catch (err) {
    Alert.alert('Ошибка', err.message);
    return false;
  }
}

// =====================

export async function PostReferal(body) {
  try {
    const response = await fetch(`${host}/referal`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      Alert.alert('Ошибка подключения ', response.status.toString());
      return false;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    Alert.alert('Ошибка', err.message);
    return false;
  }
}
