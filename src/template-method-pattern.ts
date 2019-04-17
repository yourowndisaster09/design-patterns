abstract class ActiveRecord {
    public save(okay: boolean): void {
        this.beforeSave();
        if (okay) {
            this.afterSave();
        } else {
            this.failedSave();
        }
    }

    public abstract beforeSave(): void;
    public abstract afterSave(): void;
    public abstract failedSave(): void;
}

class User extends ActiveRecord {
    public beforeSave(): void {
        console.log('User before save');
    }
    public afterSave(): void {
        console.log('User after save');
    }
    public failedSave(): void {
        console.log('User failed save');
    }
}

class Post extends ActiveRecord {
    public beforeSave(): void {
        console.log('Post before save');
    }
    public afterSave(): void {
        console.log('Post after save');
    }
    public failedSave(): void {
        console.log('Post failed save');
    }
}


const user = new User();
user.save(true);
user.save(false);

const post = new Post();
post.save(true);
post.save(false);
