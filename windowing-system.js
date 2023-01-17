// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width, height) {
    if (width !== undefined) {
        this.width = width;
    } else {
        this.width = 80;
    }

    if (height !== undefined) {
        this.height = height;
    } else {
        this.height = 60;
    }
}

Size.prototype.resize = function (width, height) {
    this.width = width;
    this.height = height;
}

export function Position(x, y) {
    if (x === undefined) {
        this.x = 0;
    } else {
        this.x = x;
    }

    if (y === undefined) {
        this.y = 0;
    } else {
        this.y = y;
    }
}

Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow {
    constructor(size, position) {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize) {
        if (newSize.width < 1 || newSize === undefined) {
            newSize.width = 1;
        }

        if (newSize.height < 1 || newSize === undefined) {
            newSize.height = 1;
        }

        if (newSize.width + this.position.x > this.screenSize.width) {
            newSize.width = this.screenSize.width - this.position.x;
        }

        if (newSize.height + this.position.y > this.screenSize.height) {
            newSize.height = this.screenSize.height - this.position.y;
        }

        this.size = newSize;
    }

    move(newPosition) {
        if (newPosition.x < 0 || newPosition === undefined) {
            newPosition.x = 0;
        }

        if (newPosition.y < 0 || newPosition === undefined) {
            newPosition.y = 0;
        }

        if (newPosition.x + this.size.width >= this.screenSize.width) {
            newPosition.x = this.screenSize.width - (this.position.x + this.size.width);
        }

        if (newPosition.y + this.size.height >= this.screenSize.height) {
            newPosition.y = this.screenSize.height - (this.position.y + this.size.height);
        }

        this.position = newPosition;
    }
}

export function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}