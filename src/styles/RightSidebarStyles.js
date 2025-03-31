import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  rightSidebar: { 
    flex: .3,  
    alignItems: "left",
    paddingTop: 70,
    //backgroundColor: "#555",
    paddingLeft: 15,
  },

  checkInButton: { 
    backgroundColor: 'black', 
    padding: 10, 
    borderRadius: 5, 
    width: "70%",
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center"
  },

  checkInText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },

  barHeader: {
    //backgroundColor: "blue",
    width: 250,
    marginBottom: 15,
    flexDirection: "row",  // Align items in a row
    justifyContent: "space-between",  // Push "Sort" to the right
    alignItems: "center",
  },

  sidebarHeader: { 
    fontSize: 20, 
    marginBottom: 10,
    marginTop: 20,
    textAlign: "left",
    flex: 1
  },

  sidebarSort_btn: { 
    fontSize: 18, 
    marginBottom: 10,
    marginTop: 20,
    textAlign: "right",
    flex: 1
  },

  cottageBoxes: {
    backgroundColor: "#E6E6E6",
    padding: 25,
    alignItems: "flex-start",
    height: "80%",
    width: 250,
    borderRadius: 5
  },

  subHeader: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 5,
    marginLeft: 15, 
    textAlign: "left", 
    alignSelf: "flex-start" 
  },

  cottagesGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    paddingLeft: 8,
    //backgroundColor: "#444",
    marginTop: 10
  },

  cottageBox: { 
    width: 50, 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5, 
    borderRadius: 5 
  },

  available: { 
    backgroundColor: "#FFFFFF",
    color: "black"
  },

  unavailable: { 
    backgroundColor: '#FFA0A0',
    color: '#fff'  
  },

  cottageText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});
