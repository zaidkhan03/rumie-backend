import { ObjectType, Field, ID } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";

@ObjectType()
class EventInstanceDto {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  event_id: number;

  @Field()
  start: string;

  @Field({ nullable: true })
  end: string | null;

  @Field()
  ranking: number;

  @Field()
  all_day: boolean;

  @Field()
  num_attending: number;
}

@ObjectType()
class EventFilterDto {
  @Field()
  name: string;

  @Field(() => ID)
  id: number;
}

@ObjectType()
class EventGeoDto {
  @Field({ nullable: true })
  latitude: string | null;

  @Field({ nullable: true })
  longitude: string | null;

  @Field({ nullable: true })
  street: string | null;

  @Field({ nullable: true })
  city: string | null;

  @Field({ nullable: true })
  state: string | null;

  @Field({ nullable: true })
  country: string | null;

  @Field({ nullable: true })
  zip: string | null;
}

@ObjectType()
class EventDto {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  url: string | null;

  @Field()
  updated_at: string;

  @Field()
  created_at: string;

  @Field({ nullable: true })
  facebook_id: string | null;

  @Field()
  first_date: string;

  @Field()
  last_date: string;

  @Field({ nullable: true })
  hashtag: string | null;

  @Field()
  urlname: string;

  @Field({ nullable: true })
  user_id: number | null;

  @Field({ nullable: true })
  directions: string;

  @Field()
  allows_reviews: boolean;

  @Field()
  allows_attendance: boolean;

  @Field()
  location: string;

  @Field({ nullable: true })
  room_number: string | null;

  @Field()
  location_name: string;

  @Field()
  status: string;

  @Field()
  experience: string;

  @Field({ nullable: true })
  stream_url: string | null;

  @Field({ nullable: true })
  stream_info: string | null;

  @Field({ nullable: true })
  stream_embed_code: string | null;

  @Field({ nullable: true })
  created_by: number | null;

  @Field({ nullable: true })
  updated_by: number | null;

  @Field({ nullable: true })
  conference_event_id: number | null;

  @Field()
  kind: string;

  @Field({ nullable: true })
  city_id: number | null;

  @Field({ nullable: true })
  neighborhood_id: number | null;

  @Field()
  school_id: number;

  @Field({ nullable: true })
  campus_id: number | null;

  @Field()
  recurring: boolean;

  @Field()
  free: boolean;

  @Field()
  private: boolean;

  @Field()
  verified: boolean;

  @Field()
  rejected: boolean;

  @Field()
  sponsored: boolean;

  @Field({ nullable: true })
  venue_id: number | null;

  @Field({ nullable: true })
  ticket_url: string | null;

  @Field({ nullable: true })
  ticket_cost: string | null;

  @Field()
  has_register: boolean;

  @Field(() => [String])
  keywords: string[];

  @Field(() => [String])
  tags: string[];

  @Field()
  description_text: string;

  @Field({ nullable: true })
  photo_id: number | null;

  @Field()
  detail_views: number;

  @Field({ nullable: true })
  address: string | null;

  @Field()
  description: string;

  @Field()
  featured: boolean;

  @Field(() => EventGeoDto)
  geo: EventGeoDto;

  @Field(() => GraphQLJSON)
  filters: {
    event_target_audience?: EventFilterDto[];
    event_topic?: EventFilterDto[];
    event_athletics?: EventFilterDto[];
    event_types?: EventFilterDto[];
  };

  @Field(() => GraphQLJSON)
  custom_fields: Record<string, any>;

  @Field()
  localist_url: string;

  @Field()
  localist_ics_url: string;

  @Field()
  photo_url: string;

  @Field({ nullable: true })
  venue_url: string | null;

  @Field(() => [EventInstanceDto])
  event_instances: { event_instance: EventInstanceDto }[];
}

@ObjectType()
class EventResponse {
  @Field(() => [EventDto])
  events: EventDto[];

  @Field(() => GraphQLJSON)
  page: Record<string, any>;

  @Field(() => GraphQLJSON)
  date: Record<string, any>;
}

export { EventDto, EventResponse };
