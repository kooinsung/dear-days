# Database Schema Diagram

## Tables Overview

### Core Tables

#### `events`
사용자가 등록한 이벤트 (생일, 기념일 등)를 저장합니다.

#### `user_providers`
한 사용자가 여러 OAuth 프로바이더를 연결할 수 있습니다.

#### `notification_rules`
사용자별 알림 설정을 저장합니다.

#### `notification_jobs`
실제 예약된 알림 작업을 저장합니다.

### Supporting Tables

#### `user_plans`
사용자의 플랜 정보를 저장합니다.

#### `device_tokens`
푸시 알림을 위한 디바이스 토큰을 저장합니다.

#### `event_purchases`
이벤트 관련 구매 내역을 저장합니다.

## Custom Types (Enums)

### `category_type`
```sql
BIRTHDAY | ANNIVERSARY | MEMORIAL | HOLIDAY | OTHER
```

### `calendar_type`
```sql
SOLAR | LUNAR
```

### `payment_provider`
```sql
DEFAULT | APPLE | GOOGLE | STRIPE
```

### `notification_status`
```sql
PENDING | SENT | FAILED | CANCELLED
```

### `plan_type`
```sql
FREE | PREMIUM
```

### `auth_provider`
```sql
email | google | kakao | naver
```


