define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/admin/login",
    "title": "Login admin",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the admin passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the admin passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false, \n           message: \"Login Successful\", \n           status: 200,\n           data: {\n               authToken: \"String\"\n               error: false\n               message: \"Login Successful\"\n               status: 200\n               }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin.js",
    "groupTitle": "create",
    "name": "PostApiV1AdminLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/signup",
    "title": "Signup admin",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the admin passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>LastName of the admin passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code of the admin passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of the admin passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the admin passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the admin passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Admin Created Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin.js",
    "groupTitle": "create",
    "name": "PostApiV1AdminSignup"
  },
  {
    "type": "post",
    "url": "/api/v1/meetings/create",
    "title": "Create a meeting",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>notes of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "emailAlerts",
            "description": "<p>emailAlerts of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "notificationAlerts",
            "description": "<p>notificationAlerts of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "invitees",
            "description": "<p>invitees of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetingColor",
            "description": "<p>meetingColor of the meeting passed as the Body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false, \n           message: \"Meeting Created successfully\", \n           status: 200, \n           data: {\n                   \"creator\": \"String\",\n                   \"title\": \"String\",\n                   \"meetingId\": \"String\"\n                   \"lastModified\": \"Date\",\n                   \"created\": \"Date\",\n                   \"meetingColor\": \"String\",\n                   \"invitees\": [Array],\n                   \"notes\": \"String\",\n                   \"location\": \"String\",\n                   \"alerts\": [\n                       {\n                           \"alertType\": \"email\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       },\n                       {\n                           \"alertType\": \"notification\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       }\n                   ],\n                   \"time\": {\n                           \"end\": \"Date\",\n                           \"start\": \"Date\"\n                   }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "create",
    "name": "PostApiV1MeetingsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login user",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false, \n           message: \"Login Successful\", \n           status: 200,\n           data: {\n               authToken: \"String\"\n               error: false\n               message: \"Login Successful\"\n               status: 200\n               }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "create",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup user",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>LastName of the user passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code of the user passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of the user passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User Created Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "create",
    "name": "PostApiV1UsersSignup"
  },
  {
    "type": "get",
    "url": "/api/v1/meetings/delete/:meetingId",
    "title": "Get all meeting created by a admin",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetingId",
            "description": "<p>The meetingId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false,\n           message: \"Meeting Deleted Sucessfully.\",\n           status: 200,\n           data: {}\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "delete",
    "name": "GetApiV1MeetingsDeleteMeetingid"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/delete",
    "title": "Delete admin by adminId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": "<p>adminId of the admin passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Admin Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin.js",
    "groupTitle": "delete",
    "name": "PostApiV1AdminDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/admin/logout",
    "title": "Logout admin by authToken",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          error: false, \n          message: \"Logged Out Successfully\", \n          status: 200, \n          data: null\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n           error: true, \n           message: \"Invalid Or Expired AuthorizationKey\", \n           status: 404, \n           data: null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin.js",
    "groupTitle": "delete",
    "name": "PostApiV1AdminLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/users/delete",
    "title": "Delete user by userId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "delete",
    "name": "PostApiV1UsersDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "Logout user by authToken",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          error: false, \n          message: \"Logged Out Successfully\", \n          status: 200, \n          data: null\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n           error: true, \n           message: \"Invalid Or Expired AuthorizationKey\", \n           status: 404, \n           data: null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "delete",
    "name": "PostApiV1UsersLogout"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/:adminId/edit",
    "title": "Edit admin by adminId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": "<p>adminId of the admin passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Admin Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tadminId: \"string\",\n\t\t\t\t\t\tfirstName: \"string\",\n\t\t\t\t\t\tlastName: \"string\",\n                        email: \"string\",\n                        countryCode: number,\n\t\t\t\t\t\tmoile: number,\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin.js",
    "groupTitle": "edit",
    "name": "PutApiV1BlogsAdminidEdit"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/forgotPassword",
    "title": "Recover password by user email",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as the Body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false, \n           message: \"Password change requested\", \n           status: 200, \n           data: {\n               n: 1\n               nModified: 1\n               ok: 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "edit",
    "name": "PutApiV1BlogsForgotpassword"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/resetPassword",
    "title": "Reset password by password reset token",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>password reset token of the user passed as the Query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false, \n           message: \"Password change sucessfully\", \n           status: 200, \n           data: {\n               n: 1\n               nModified: 1\n               ok: 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "edit",
    "name": "PutApiV1BlogsResetpassword"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/:userId/edit",
    "title": "Edit user by userId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tfirstName: \"string\",\n\t\t\t\t\t\tlastName: \"string\",\n                        email: \"string\",\n                        countryCode: number,\n\t\t\t\t\t\tmoile: number,\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "edit",
    "name": "PutApiV1BlogsUseridEdit"
  },
  {
    "type": "put",
    "url": "/api/v1/meetings/edit/:meetingId",
    "title": "Edit meeting by meetingId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>notes of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "emailAlerts",
            "description": "<p>emailAlerts of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "notificationAlerts",
            "description": "<p>notificationAlerts of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "invitees",
            "description": "<p>invitees of the meeting passed as the Body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetingColor",
            "description": "<p>meetingColor of the meeting passed as the Body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tfirstName: \"string\",\n\t\t\t\t\t\tlastName: \"string\",\n                        email: \"string\",\n                        countryCode: number,\n\t\t\t\t\t\tmoile: number,\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "edit",
    "name": "PutApiV1MeetingsEditMeetingid"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/:adminId/details",
    "title": "Get a single admin",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": "<p>The adminId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Admin Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n            adminId: \"string\",\n            firstName: \"string\",\n            lastName: \"string\",\n            email: \"mstring\",\n            countryCode: number,\n            mobileNumber: number,\n            createdOn: \"Date\",\n\t\t\t\t}\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin.js",
    "groupTitle": "read",
    "name": "GetApiV1AdminAdminidDetails"
  },
  {
    "type": "get",
    "url": "/api/v1/admin/view/all",
    "title": "Get all admins",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Admin Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tadminId: \"string\",\n\t\t\t\t\t\tfirstName: \"string\",\n\t\t\t\t\t\tlastName: \"string\",\n                        email: \"string\",\n                        countryCode: number,\n\t\t\t\t\t\tmoile: number,\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Admin Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/admin.js",
    "groupTitle": "read",
    "name": "GetApiV1AdminViewAll"
  },
  {
    "type": "get",
    "url": "/api/v1/meetings/all",
    "title": "Get all meetings of a user",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId of the user should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response.",
          "content": "{\n           error: false,\n           message: \"All Meeting Details Found.\",\n           status: 200,\n           data: {     \n                   \"creator\": \"String\",\n                   \"title\": \"String\",\n                   \"meetingId\": \"String\"\n                   \"lastModified\": \"Date\",\n                   \"created\": \"Date\",\n                   \"meetingColor\": \"String\",\n                   \"invitees\": [Array],\n                   \"notes\": \"String\",\n                   \"location\": \"String\",\n                   \"alerts\": [\n                       {\n                           \"alertType\": \"email\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       },\n                       {\n                           \"alertType\": \"notification\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       }\n                   ],\n                   \"time\": {\n                           \"end\": \"Date\",\n                           \"start\": \"Date\"\n                   }\n               }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "read",
    "name": "GetApiV1MeetingsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/meetings/all/admin",
    "title": "Get all meeting created by a admin",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": "<p>The adminId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false,\n           message: \"All Meeting Details Found.\",\n           status: 200,\n           data: {     \n                   \"creator\": \"String\",\n                   \"title\": \"String\",\n                   \"meetingId\": \"String\"\n                   \"lastModified\": \"Date\",\n                   \"created\": \"Date\",\n                   \"meetingColor\": \"String\",\n                   \"invitees\": [Array],\n                   \"notes\": \"String\",\n                   \"location\": \"String\",\n                   \"alerts\": [\n                       {\n                           \"alertType\": \"email\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       },\n                       {\n                           \"alertType\": \"notification\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       }\n                   ],\n                   \"time\": {\n                           \"end\": \"Date\",\n                           \"start\": \"Date\"\n                   }\n               }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "read",
    "name": "GetApiV1MeetingsAllAdmin"
  },
  {
    "type": "get",
    "url": "/api/v1/meetings/date/:day/:month/:year",
    "title": "Get all meetings by date",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "day",
            "description": "<p>The day should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "month",
            "description": "<p>The month should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>The year should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false,\n           message: \"Meeting Details Found.\",\n           status: 200,\n           data: {     \n                   \"creator\": \"String\",\n                   \"title\": \"String\",\n                   \"meetingId\": \"String\"\n                   \"lastModified\": \"Date\",\n                   \"created\": \"Date\",\n                   \"meetingColor\": \"String\",\n                   \"invitees\": [Array],\n                   \"notes\": \"String\",\n                   \"location\": \"String\",\n                   \"alerts\": [\n                       {\n                           \"alertType\": \"email\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       },\n                       {\n                           \"alertType\": \"notification\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       }\n                   ],\n                   \"time\": {\n                           \"end\": \"Date\",\n                           \"start\": \"Date\"\n                   }\n               }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "read",
    "name": "GetApiV1MeetingsDateDayMonthYear"
  },
  {
    "type": "get",
    "url": "/api/v1/meetings/:meetingId/details",
    "title": "Get a single meeting",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetingId",
            "description": "<p>The meetingId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false,\n           message: \"Meeting Details Found.\",\n           status: 200,\n           data: {     \n                   \"creator\": \"String\",\n                   \"title\": \"String\",\n                   \"meetingId\": \"String\"\n                   \"lastModified\": \"Date\",\n                   \"created\": \"Date\",\n                   \"meetingColor\": \"String\",\n                   \"invitees\": [Array],\n                   \"notes\": \"String\",\n                   \"location\": \"String\",\n                   \"alerts\": [\n                       {\n                           \"alertType\": \"email\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       },\n                       {\n                           \"alertType\": \"notification\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       }\n                   ],\n                   \"time\": {\n                           \"end\": \"Date\",\n                           \"start\": \"Date\"\n                   }\n               }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "read",
    "name": "GetApiV1MeetingsMeetingidDetails"
  },
  {
    "type": "get",
    "url": "/api/v1/meetings/month/:month/:year",
    "title": "Get all meetings by month",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "month",
            "description": "<p>The month should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>The year should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false,\n           message: \"Meeting Details Found.\",\n           status: 200,\n           data: {     \n                   \"creator\": \"String\",\n                   \"title\": \"String\",\n                   \"meetingId\": \"String\"\n                   \"lastModified\": \"Date\",\n                   \"created\": \"Date\",\n                   \"meetingColor\": \"String\",\n                   \"invitees\": [Array],\n                   \"notes\": \"String\",\n                   \"location\": \"String\",\n                   \"alerts\": [\n                       {\n                           \"alertType\": \"email\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       },\n                       {\n                           \"alertType\": \"notification\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       }\n                   ],\n                   \"time\": {\n                           \"end\": \"Date\",\n                           \"start\": \"Date\"\n                   }\n               }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "read",
    "name": "GetApiV1MeetingsMonthMonthYear"
  },
  {
    "type": "get",
    "url": "/api/v1/meetings/year/:year",
    "title": "Get meetings by year",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>The year should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           error: false,\n           message: \"All Meetings Details Found.\",\n           status: 200,\n           data: {     \n                   \"creator\": \"String\",\n                   \"title\": \"String\",\n                   \"meetingId\": \"String\"\n                   \"lastModified\": \"Date\",\n                   \"created\": \"Date\",\n                   \"meetingColor\": \"String\",\n                   \"invitees\": [Array],\n                   \"notes\": \"String\",\n                   \"location\": \"String\",\n                   \"alerts\": [\n                       {\n                           \"alertType\": \"email\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       },\n                       {\n                           \"alertType\": \"notification\",\n                           \"minutes\": Number,\n                           \"_id\": \"String\"\n                       }\n                   ],\n                   \"time\": {\n                           \"end\": \"Date\",\n                           \"start\": \"Date\"\n                   }\n               }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "read",
    "name": "GetApiV1MeetingsYearYear"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "Get a single user",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n            userId: \"string\",\n            firstName: \"string\",\n            lastName: \"string\",\n            email: \"mstring\",\n            countryCode: number,\n            mobileNumber: number,\n            createdOn: \"Date\",\n\t\t\t\t}\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "read",
    "name": "GetApiV1UsersUseridDetails"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "Get all users",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All User Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tfirstName: \"string\",\n\t\t\t\t\t\tlastName: \"string\",\n                        email: \"string\",\n                        countryCode: number,\n\t\t\t\t\t\tmoile: number,\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find User Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "read",
    "name": "GetApiV1UsersViewAll"
  }
] });
