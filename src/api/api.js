import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // Update this URL to match your backend's URL

const api = axios.create({
  baseURL: API_URL,
});

// CRUD operations for Products
export const fetchProducts = () => api.get('/products/');
export const fetchProduct = (id) => api.get(`/products/${id}/`);
export const createProduct = (product) => api.post('/products/', product);
export const updateProduct = (id, product) => api.put(`/products/${id}/`, product);
export const deleteProduct = (id) => api.delete(`/products/${id}/`);

// CRUD operations for Sales
export const fetchSales = () => api.get('/sales/');
export const fetchSale = (id) => api.get(`/sales/${id}/`);
export const createSale = (sale) => api.post('/sales/', sale);
export const updateSale = (id, sale) => api.put(`/sales/${id}/`, sale);
export const deleteSale = (id) => api.delete(`/sales/${id}/`);

// CRUD operations for Customers
export const fetchCustomers = () => api.get('/customers/');
export const fetchCustomer = (id) => api.get(`/customers/${id}/`);
export const createCustomer = (customer) => api.post('/customers/', customer);
export const updateCustomer = (id, customer) => api.put(`/customers/${id}/`, customer);
export const deleteCustomer = (id) => api.delete(`/customers/${id}/`);

// CRUD operations for Orders
export const fetchOrders = () => api.get('/orders/');
export const fetchOrder = (id) => api.get(`/orders/${id}/`);
export const createOrder = (order) => api.post('/orders/', order);
export const updateOrder = (id, order) => api.put(`/orders/${id}/`, order);
export const deleteOrder = (id) => api.delete(`/orders/${id}/`);

// CRUD operations for Employees
export const fetchEmployees = () => api.get('/employees/');
export const fetchEmployee = (id) => api.get(`/employees/${id}/`);
export const createEmployee = (employee) => api.post('/employees/', employee);
export const updateEmployee = (id, employee) => api.put(`/employees/${id}/`, employee);
export const deleteEmployee = (id) => api.delete(`/employees/${id}/`);

// CRUD operations for Messages
export const fetchMessages = () => api.get('/messages/');
export const fetchMessage = (id) => api.get(`/messages/${id}/`);
export const createMessage = (message) => api.post('/messages/', message);
export const updateMessage = (id, message) => api.put(`/messages/${id}/`, message);
export const deleteMessage = (id) => api.delete(`/messages/${id}/`);

// CRUD operations for Tasks
export const fetchTasks = () => api.get('/tasks/');
export const fetchTask = (id) => api.get(`/tasks/${id}/`);
export const createTask = (task) => api.post('/tasks/', task);
export const updateTask = (id, task) => api.put(`/tasks/${id}/`, task);
export const deleteTask = (id) => api.delete(`/tasks/${id}/`);

// CRUD operations for Notifications
export const fetchNotifications = () => api.get('/notifications/');
export const fetchNotification = (id) => api.get(`/notifications/${id}/`);
export const createNotification = (notification) => api.post('/notifications/', notification);
export const updateNotification = (id, notification) => api.put(`/notifications/${id}/`, notification);
export const deleteNotification = (id) => api.delete(`/notifications/${id}/`);

// CRUD operations for Calendar Events
export const fetchCalendarEvents = () => api.get('/events/');
export const fetchCalendarEvent = (id) => api.get(`/events/${id}/`);
export const createCalendarEvent = (event) => api.post('/events/', event);
export const updateCalendarEvent = (id, event) => api.put(`/events/${id}/`, event);
export const deleteCalendarEvent = (id) => api.delete(`/events/${id}/`);

// CRUD operations for Customer Insights
export const fetchCustomerInsights = () => api.get('/customerinsights/');
export const fetchCustomerInsight = (id) => api.get(`/customerinsights/${id}/`);
export const createCustomerInsight = (insight) => api.post('/customerinsights/', insight);
export const updateCustomerInsight = (id, insight) => api.put(`/customerinsights/${id}/`, insight);
export const deleteCustomerInsight = (id) => api.delete(`/customerinsights/${id}/`);

// CRUD operations for Inventory Items
export const fetchInventoryItems = () => api.get('/inventoryitems/');
export const fetchInventoryItem = (id) => api.get(`/inventoryitems/${id}/`);
export const createInventoryItem = (item) => api.post('/inventoryitems/', item);
export const updateInventoryItem = (id, item) => api.put(`/inventoryitems/${id}/`, item);
export const deleteInventoryItem = (id) => api.delete(`/inventoryitems/${id}/`);

// CRUD operations for Inventory Transactions
export const fetchInventoryTransactions = () => api.get('/inventorytransactions/');
export const fetchInventoryTransaction = (id) => api.get(`/inventorytransactions/${id}/`);
export const createInventoryTransaction = (transaction) => api.post('/inventorytransactions/', transaction);
export const updateInventoryTransaction = (id, transaction) => api.put(`/inventorytransactions/${id}/`, transaction);
export const deleteInventoryTransaction = (id) => api.delete(`/inventorytransactions/${id}/`);

// CRUD operations for Products (Additional Product Model)
export const fetchAllProducts = () => api.get('/products/');
export const fetchAllProduct = (id) => api.get(`/products/${id}/`);
export const createAllProduct = (product) => api.post('/products/', product);
export const updateAllProduct = (id, product) => api.put(`/products/${id}/`, product);
export const deleteAllProduct = (id) => api.delete(`/products/${id}/`);
