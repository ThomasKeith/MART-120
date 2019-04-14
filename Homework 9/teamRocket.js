class teamRocket
{
    constructor()
    {
        this.x = x;
        this.y = y;
        this.enemy = enemy;
        
    }
    
    display()
    {
        image(this.enemy,this.x,this.y);
    }

    move()
    {
        function enemyChase(mSpeed,jsSpeed,jmSpeed){
            
            if(enemyX > x && enemyX > 0){
                enemyX -= mSpeed;
            }
            if(enemyX < x && enemyX < (canvasWidth - 62)) {
                enemyX += mSpeed;
            }
            if(enemyY > y && enemyY > 0) {
                enemyY -= mSpeed;
            }
            if(enemyY < y && enemyY < (canvasHeight - 75)) {
                enemyY += mSpeed;
            }
        }
    }
}