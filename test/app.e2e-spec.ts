import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

let access_token = '';
let userId = '';
let moduleeId = '';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/register (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({
        first_name: 'FirstNameTest',
        middle_name: '',
        last_name: 'lastNameTest',
        email: 'test@mail.ru',
        password: 'testPass',
        isModerator: true,
        group: 1,
      })
      .expect(201)
      .expect((res) => {
        userId = res.body.id;
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            first_name: expect.any(String),
            middle_name: expect.any(String),
            last_name: expect.any(String),
            email: expect.any(String),
            password: expect.any(String),
            isModerator: expect.any(Boolean),
            group: expect.any(Number),
          }),
        );
      });
  });

  it('/auth/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'test@mail.ru',
        password: 'testPass',
      })
      .expect(201)
      .expect((res) => {
        access_token = res.body.access_token;
        expect(res.body).toEqual(
          expect.objectContaining({
            access_token: expect.any(String),
            isModerator: expect.any(Boolean),
          }),
        );
      });
  });

  it('/modulee (POST)', () => {
    return request(app.getHttpServer())
      .post('/modulee')
      .set('Authorization', 'Bearer ' + access_token)
      .send({
        name: 'test',
        description: 'test',
        dateTimeStart: '2023-07-18 21:01:25.000000',
        dateTimeEnd: '2023-07-18 21:01:25.000000',
        subject: userId,
      })
      .expect(201)
      .expect((res) => {
        moduleeId = res.body.id;
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            dateTimeStart: expect.any(String),
            dateTimeEnd: expect.any(String),
            subject: expect.any(Number),
          }),
        );
      });
  });

  it('/modulee (PATCH)', () => {
    return request(app.getHttpServer())
      .patch(`/modulee/${moduleeId}`)
      .set('Authorization', 'Bearer ' + access_token)
      .send({
        name: 'test up',
        description: 'test up',
        dateTimeStart: '2023-07-18 21:01:25.000001',
        dateTimeEnd: '2023-07-18 21:01:25.000001',
        subject: userId,
      })
      .expect(200)
      .expect((res) => {
        console.log(res.body);

        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            dateTimeStart: expect.any(String),
            dateTimeEnd: expect.any(String),
            subject: expect.any(Number),
          }),
        );
      });
  });

  // it('/modulee (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get(`/modulee/${moduleeId}`)
  //     .set('Authorization', 'Bearer ' + access_token)
  //     .expect(200)
  //     .expect((res) => {
  //       console.log(res.body);

  //       expect(res.body).toEqual(
  //         expect.objectContaining({
  //           id: expect.any(Number),
  //           name: expect.any(String),
  //           description: expect.any(String),
  //           dateTimeStart: expect.any(Date),
  //           dateTimeEnd: expect.any(Date),
  //           subject: expect.any(Object),
  //           tasks: expect.any(Array),
  //         }),
  //       );
  //     });
  // });

  it('/modulee (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/modulee/${moduleeId}`)
      .set('Authorization', 'Bearer ' + access_token)
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body).toEqual(
          expect.objectContaining({
            raw: expect.any(Array),
            affected: expect.any(Number),
          }),
        );
      });
  });

  it('/subject (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/subject/${userId}`)
      .set('Authorization', 'Bearer ' + access_token)
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body).toEqual(
          expect.objectContaining({
            raw: expect.any(Array),
            affected: expect.any(Number),
          }),
        );
      });
  });

  afterAll((done) => {
    app.close();
    // process.exit(0);
    done();
  });
});
