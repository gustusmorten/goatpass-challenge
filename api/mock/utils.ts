export const mockApiCall = (response: MockResponse): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.data);
        } else {
          reject({ status: response.status, error: response.error });
        }
      }, 1500); 
    });
};