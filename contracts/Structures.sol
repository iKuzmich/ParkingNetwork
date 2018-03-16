pragma solidity ^0.4.0;

library Structures {
    
    enum Access {Allowed, Limited, Denied}
    
    struct Term {
        string fromDate;
        string dueDate;
    }
    
    struct Right {
        string rightName;
        Access accessLevel;
    }
    
    struct Grant {
        Term period;
        Right[] rights;
    }
    
    struct Customer {
        address owner;
        string name;
        mapping (address => User) userList;
    }
    
    struct User {
        address identity;
        string name;
    }
}
