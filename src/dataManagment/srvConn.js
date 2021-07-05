import {Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {host, token} from '../Constants/network';

export async function makeGetRequest(params) {
  try {
    const response = await fetch(`${host}/${params}`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 500) {
        const text = await response.text();
        throw Error(text);
      }
      throw Error(`Статус ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw Error(err.message);
  }
}

export async function sendData(params, body) {
  try {
    const response = await fetch(`${host}/${params}`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      if (response.status === 500) {
        const text = await response.text();
        throw Error(text);
      }
      throw Error(`Статус ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw Error(err.message);
  }
}

export const handleError = (err) => {
  showMessage({
    description: err.message,
    message: 'Ошибка!',
    type: 'danger',
  });
};

export async function checkClient(mobile) {
  try {
    const response = await fetch(`${host}/checkclient/${mobile}`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 500) {
        const text = await response.text();
        throw Error(text);
      }
      throw Error(`Статус ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (err) {
    throw Error(err.message);
  }
}

export async function sendMessage(body) {
  try {
    const response = await fetch(
      'https://l-factura.uz/factura/hs/common/sendsms',
      {
        method: 'POST',
        headers: {
          Authorization: 'Basic Ym9uaXRvU01TOkJvbml0bzI2OTY=',
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      throw Error(`Причинаой могут быть
- Невалидный номер
- Приложение не доступно для вашего региона 
- Ошибка сервера
      `);
    }

    if (response.status === 200) return true;
  } catch (err) {
    throw Error(err.message);
  }
}

// ================

export async function order(body) {
  try {
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

    if (response.status === 200) return true;
  } catch (err) {
    Alert.alert('Ошибка', err.message);
    return false;
  }
}
