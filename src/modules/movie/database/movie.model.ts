import { Column, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { STRING, INTEGER } from 'sequelize';

@Table
export class Movie extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
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
