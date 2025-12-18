// กำหนด Interface สำหรับ Response (ปรับตาม API จริงของคุณ)
interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

// ใช้ Environment Variable แทนการ Hardcode (ถ้าใช้ Vite)
const API_URL = import.meta.env.VITE_API_URL || 'https://api.yoursite.com';

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      // ดึง message จาก backend หรือใช้ default text
      throw new Error(data.message || 'Login failed');
    }

    return data;
  } catch (error) {
    // ส่ง error ต่อไปให้ Component จัดการ
    return Promise.reject(error);
  }
};