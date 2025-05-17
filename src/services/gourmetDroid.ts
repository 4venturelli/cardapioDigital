import axios from 'axios';

interface GourmetDroidConfig {
  apiKey: string;
  baseUrl: string;
  restaurantId: string;
}

class GourmetDroidService {
  private config: GourmetDroidConfig;
  private api: any;

  constructor() {
    this.config = {
      apiKey: process.env.GOURMET_DROID_API_KEY || '',
      baseUrl: process.env.GOURMET_DROID_BASE_URL || '',
      restaurantId: process.env.GOURMET_DROID_RESTAURANT_ID || '',
    };

    this.api = axios.create({
      baseURL: this.config.baseUrl,
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async getMenu() {
    try {
      const response = await this.api.get(`/restaurants/${this.config.restaurantId}/menu`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar cardápio:', error);
      throw error;
    }
  }

  async sendOrder(order: any) {
    try {
      const response = await this.api.post(`/restaurants/${this.config.restaurantId}/orders`, order);
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      throw error;
    }
  }

  async getOrderStatus(orderId: string) {
    try {
      const response = await this.api.get(`/restaurants/${this.config.restaurantId}/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar status do pedido:', error);
      throw error;
    }
  }
}

export const gourmetDroidService = new GourmetDroidService(); 