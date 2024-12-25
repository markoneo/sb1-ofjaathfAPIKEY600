// Google Maps configuration
export const GOOGLE_MAPS_CONFIG = {
  apiKey: 'AIzaSyBlS3XPCgw7mXa7Rc85AEfUDFCAcJtRpJM',
  options: {
    componentRestrictions: { country: ['us', 'ca', 'gb', 'de'] }, // Add relevant countries
    types: ['address'],
    fields: ['formatted_address', 'geometry', 'place_id', 'name']
  }
};