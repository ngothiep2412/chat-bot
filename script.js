let chatClient;

function startChat() {
    if (!chatClient) {
        chatClient = new CozeWebSDK.WebChatClient({
            config: {
                bot_id: '7486314111962529799',
            },
            componentProps: {
                title: 'Nguyên Hà Shop',
            },
            auth: {
                type: 'token',
                token: 'pat_K5BsADWGQ3qz3WlWQWfiiMxHITNxXGRryYqGyjaoZcNZYqBH5pyGiIqWF9f8hSSl',
                onRefreshToken: function () {
                    return 'pat_K5BsADWGQ3qz3WlWQWfiiMxHITNxXGRryYqGyjaoZcNZYqBH5pyGiIqWF9f8hSSl'
                }
            },
            userInfo: { 
                id: 'user', 
                url: 'https://cdn-icons-png.flaticon.com/512/7891/7891470.png', 
                nickname: 'Khách hàng', 
              }, 
            ui: { 
                base: { 
                  icon: 'https://cdn2.hubspot.net/hub/7482566/hubfs/KingMeat_logo.png?width=108&height=108', 
                  lang: 'vi',
                },
                chatBot: {
                  title: 'Nguyên Hà Shop',
                  uploadable: false,
                }, 
                /**
                * Controls whether to display the floating ball at the bottom right corner of the page.
                */
                asstBtn: { 
                  isNeed: true, 
                }, 
        
              },
        });
    }
} 