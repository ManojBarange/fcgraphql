exports.users = async (sequelize,Sequelize)=>{
        const User = sequelize.define('user', { 
            user_id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoincrement:true
            },
            username: {
                type:Sequelize.DataTypes.STRING,
                allowNull:false,
        
            }, 
            password: {
                type:Sequelize.DataTypes.STRING,
                defaultValue:null,
            }, 
            age: {
                type:Sequelize.DataTypes.INTEGER,
                defaultValue:21
            },
        
        
        },{
        
            freezeTableName:true
        });
            User.sync({alter:true}).then(()=>{
                console.log("User Created")
            }).catch((err)=>{
                console.log(err)
            })
    }