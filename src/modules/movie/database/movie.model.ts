import { Column, Model, Table } from 'sequelize-typescript';
import { STRING, UUIDV4, INTEGER } from 'sequelize';

@Table
export class Movie extends Model {
  @Column({
    type: STRING,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  id: string;

  @Column({
    type: STRING,
  })
  name: string;

  @Column({
    type: STRING,
  })
  synopsis: string;

  @Column({
    type: INTEGER,
  })
  duration: number;

  @Column({
    type: STRING,
  })
  cast: string;

  @Column({
    type: STRING,
  })
  url: string;
}
