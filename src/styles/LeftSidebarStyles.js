import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sidebar: { 
    flex: .2,
    backgroundColor: '#ffffff', 
    padding: 20,
    alignItems: "center",
    paddingTop: 50
  },

  profileCircle: { 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: '#111111', 
    marginBottom: 10
  },

  staffName: { 
    fontSize: 22, 
    fontWeight: 'bold',
    textAlign: "center" 
  },

  staffRole: { 
    fontSize: 17, 
    color: '#777',
    marginBottom: 50
  },

  navButton: { 
    padding: 10, 
    backgroundColor: '#ddd', 
    marginTop: 10, 
    borderRadius: 5,
    width: "100%"
  },

  navText: { 
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: "center"
  },
});
